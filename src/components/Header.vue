<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Home</el-menu-item>
        <el-submenu index="2">
            <template slot="title">Workspace</template>
            <el-menu-item index="2-1">Category I</el-menu-item>
            <el-menu-item index="2-2">Category II</el-menu-item>
            <el-menu-item index="2-3">Category III</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">About</el-menu-item>
    </el-menu>
</template>