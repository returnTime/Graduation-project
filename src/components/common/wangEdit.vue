<template>
  <div>
    <div>
      
      <!-- <button @click="insertTextHandler">insert text</button>
      <button @click="disableHandler">disable</button> -->
    </div>
    <div style="border: 1px solid #ccc; margin-top: 10px;">
      <!-- 工具栏 -->
      <Toolbar style="border-bottom: 1px solid #ccc"
               :editor="editor"
               :defaultConfig="toolbarConfig"
               :mode="mode" />
      <!-- 编辑器 -->
      <Editor style="height: 400px; overflow-y: hidden;"
              :defaultConfig="editorConfig"
              v-model="html"
              :mode="mode"
              @onChange="onChange"
              @onCreated="onCreated" />
    </div>
    <div class="m-1">
      <el-button @click="printEditorHtml" type="primary" class="" style="width:100%">发布</el-button>
    </div>
    <!-- <div style="margin-top: 10px;">
      <textarea v-model="html"
                readonly
                style="width: 100%; height: 200px; outline: none;"></textarea>
    </div> -->
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
// import { createEditor, createToolbar } from '@wangeditor/editor'

export default {
  name: 'MyEditor',
  components: { Editor, Toolbar },
  data () {
    return {
      editor: null,
      html: '',
      toolbarConfig: {
        // toolbarKeys: [ /* 显示哪些菜单，如何排序、分组 */ ],
        // excludeKeys: ["uploadVideo", "insertVideo"/* 隐藏哪些菜单 */],
      },
      editorConfig: {
        placeholder: '请输入内容...',
        // autoFocus: false,
        // 所有的菜单配置，都要在 MENU_CONF 属性下
        MENU_CONF: {
          uploadImage: {
            // 后端上传地址，必填
            server: "/api/upload/image",
            // form-data fieldName，后端接口参数名称，默认值wangeditor-uploaded-image
            fieldName: "file",
            // 1M，单个文件的最大体积限制，默认为 2M
            maxFileSize: 1 * 1024 * 1024,
            // 最多可上传几个文件，默认为 100
            maxNumberOfFiles: 10,
            // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
            allowedFileTypes: ['image/*'],
            // 15 秒，超时时间，默认为 10 秒
            timeout: 15 * 1000,
            // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
            // meta: {
            //     token: 'xxx',
            //     otherKey: 'yyy'
            // },
            // 将 meta 拼接到 url 参数中，默认 false
            // metaWithUrl: false,
            // 自定义增加 http  header
            // headers: {
            //     Accept: 'text/x-json',
            //     otherKey: 'xxx'
            // },
            // 跨域是否传递 cookie ，默认为 false
            // withCredentials: false,
          },
          uploadVideo: {
            // 后端上传地址，必填
            server: "/api/upload/video",
            // form-data fieldName，后端接口参数名称，默认值wangeditor-uploaded-video
            fieldName: "file",
            // 5M，文件大小限制，默认10M
            maxFileSize: 5 * 1024 * 1024,
            // 最多可上传几个文件，默认为 5
            maxNumberOfFiles: 3,
            // 选择文件时的类型限制，默认为 ['video/*'] 。如不想限制，则设置为 []
            allowedFileTypes: ['video/*'],
            // 15 秒，超时时间，默认为 30 秒
            timeout: 15 * 1000,
            // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
            // meta: {
            //     token: 'xxx',
            //     otherKey: 'yyy'
            // },
            // 将 meta 拼接到 url 参数中，默认 false
            // metaWithUrl: false,
            // 自定义增加 http  header
            // headers: {
            //     Accept: 'text/x-json',
            //     otherKey: 'xxx'
            // },
            // 跨域是否传递 cookie ，默认为 false
            // withCredentials: false,
          }
        }
      },
      mode: 'simple'
    }
  },
  methods: {
    onCreated (editor) {
      this.editor = Object.seal(editor) // 【注意】一定要用 Object.seal() 否则会报错
    },
    onChange (editor) {
      console.log('onChange', editor.getHtml()) // onChange 时获取编辑器最新内容
    },
    insertTextHandler () {      //插入
      const editor = this.editor
      if (editor == null) return
      editor.insertText(' hello ')
    },
    printEditorHtml () {
      const editor = this.editor
      if (editor == null) return
      console.log(editor.getHtml())
    },
    disableHandler () {           //禁用编辑
      const editor = this.editor
      if (editor == null) return
      editor.disable()
    }
  },
  mounted () {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = ''
    }, 1500)
  },
  beforeDestroy () {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁 editor ，重要！！！
  },
}
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>