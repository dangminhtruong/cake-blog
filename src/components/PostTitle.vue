<template>
    <h2 class="entry_group_title" v-if="!isEdit">
        <p @click="openEditor">{{ title }}</p>
    </h2>
    <div v-else class="entry_group_title">
        <ValidationObserver ref="editTitle">
            <ValidationProvider name="title" v-slot="{errors}" rules="required">
                <el-input
                    placeholder="Enter post title"
                    v-model="title"
                    @blur="isEdit = false"
                    ref="titleInput"
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
        return{
            title: this.post.title,
            isEdit: false
        }
    },
    methods: {
        openEditor(){
            this.isEdit = true
            this.$nextTick(function(){
                this.$refs.titleInput.focus()
            })
        },
        async onSubmit(){
            await this.$refs.editTitle.validate().then(success => {
                if (success) {
                    console.log(this.title)
                }
            });
        }
    }
}
</script>