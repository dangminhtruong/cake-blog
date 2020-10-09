<template>
    <div class="edit-img">
        <ValidationObserver ref="editAvatar">
            <ValidationProvider name="avatar" v-slot="{errors}" rules="required">
            <el-input
                placeholder="Enter new image url."
                prefix-icon="el-icon-picture-outline"
                v-model="url"
                @keyup.enter.native="onSubmit"
            >
            </el-input>
            <div class="error">{{ errors[0] }}</div>
            </ValidationProvider>
        </ValidationObserver>
        
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required.'
});

export default {
    props: ['post'],
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data(){
        return {
            url: this.post.avatar
        }
    },
    methods: {
        async onSubmit(){
            await this.$refs.editAvatar.validate().then(success => {
                if (success) {
                    this.$store.dispatch('home/updatePost', {
                        id: this.post.id,
                        form: {
                            type: 'avatar',
                            content: this.url
                        }
                    });
                }
            });
        },
    }
}
</script>