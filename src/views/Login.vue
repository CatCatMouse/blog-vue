<script setup>
import { ref } from 'vue'

const tab_active = ref('f1')
// const tab_click = (tab, event) => {
//     console.log(tab, event)
// }
</script>

<template>
    <div class="box">
        <h1 class="login-title">用户登录</h1>
        <div><img src="/login.jpg" alt="" width="50" height="50"></div>
        <div>tip</div>
        <div>
            <el-tabs v-model="tab_active" type="card"
            
            >
                <el-tab-pane label="密码登录" name="f1">
                        <el-input style="width: 240px" placeholder="账户" />
                        <el-link type="primary">忘记账户</el-link>
                        <el-input type="password" style="width: 240px" placeholder="密码" />
                        <el-link type="primary">忘记密码</el-link>
                        <div><el-checkbox v-model="checked1" label="记住我" size="small" /></div>
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                        
                </el-tab-pane>
                <el-tab-pane label="短信登录" name="f2"></el-tab-pane>
            </el-tabs>
        </div>

        <div> <el-link type="primary">立即注册</el-link></div>
    </div>
</template>

<style scoped>
body {
    background-color: #d32323;
}

.box {
    margin: auto;
    text-align: center;
    width: 400px;
    height: 600px;
    border: 1px solid red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.el-link {
  margin-right: 8px;
}

.login-title {
    padding: 5px;
}
</style>