<template>
    <div class="main_post_body" v-if="!isEdit">
        <p @click="openEditor">{{ post.description }}</p>
    </div>
    <div class="edit_description" v-else>
        <ValidationObserver ref="editDescription">
            <ValidationProvider name="description" v-slot="{errors}" rules="required">
                <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="Enter post description"
                    v-model="description"
                    @blur="onSubmit"
                    ref="descriptionInput"
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
            isEdit: false,
            description: this.post.description,
        }
    },
    methods:{
        async onSubmit(){
            await this.$refs.editDescription.validate().then(success => {
                if (success) {
                    this.$store.dispatch('home/updatePost', {
                        id: this.post.id,
                        form: {
                            type: 'description',
                            content: this.description
                        }
                    });
                    this.isEdit = false
                    this.$refs.descriptionInput.blur()
                }
            });
        },
        openEditor(){
            this.isEdit = true
            this.$nextTick(function(){
                this.$refs.descriptionInput.focus()
            })
        },
    },
    watch: {
        post: function (post) {
            this.description = post.description
        }
    },
}
</script>