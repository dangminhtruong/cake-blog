<template>
    <el-dialog
        title="Add post"
        :visible.sync="isOpenAdd"
        :before-close="handleClose"
        width="30%"
    >
        <div class="add">
            <ValidationObserver ref="form">
                <div class="form-item">
                    <ValidationProvider name="title" v-slot="{errors}" rules="required">
                        <el-input
                            placeholder="Enter post title."
                            prefix-icon="el-icon-collection-tag"
                            v-model="title"
                        >
                        </el-input>
                        <div class="error">{{ errors[0] }}</div>
                    </ValidationProvider>
                </div>
                    <el-input
                        placeholder="Enter avatar url."
                        prefix-icon="el-icon-picture-outline"
                        class="form-item"
                        v-model="avatar"
                    >
                    </el-input>
                <div class="form-item">
                    <ValidationProvider name="description" v-slot="{errors}" rules="required">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="Enter post's description."
                            class="form-item"
                            v-model="description"
                        >
                        </el-input>
                        <div class="error">{{ errors[0] }}</div>
                    </ValidationProvider>
                </div>
                <div class="form-item">
                    <ValidationProvider name="content" v-slot="{errors}" rules="required">
                        <el-input
                            type="textarea"
                            :rows="10"
                            placeholder="Enter post's content."
                            v-model="content"
                        >
                        </el-input>
                        <div class="error">{{ errors[0] }}</div>
                    </ValidationProvider>
                </div>
            </ValidationObserver>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">
                Cancel
            </el-button>
            <el-button type="primary" @click="hanldeSubmit">
                Done
            </el-button>
        </span>
    </el-dialog>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required.'
});

export default {
    props: ['isOpenAdd', 'close-add'],
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            openAdd: false,
            title: null,
            avatar: null,
            description: null,
            content: null
        };
    },
    methods: {
        handleClose() {
            this.resetAll()
        },
        async hanldeSubmit(){
            await this.$refs.form.validate().then(success => {
                if (success) {
                    this.$store.dispatch('home/addPost', {
                        title: this.title,
                        avatar: this.avatar,
                        description: this.description,
                        content: this.content,
                    })
                    this.resetAll()
                }
            });
        },
        resetAll(){
            this.title = null
            this.avatar = null
            this.description = null
            this.content = null
            this.$nextTick(() => this.$refs.form.reset())
            this.$emit('close-add')
        }
    }
}
</script>