import { reactive } from 'vue'

export const store = reactive({
  login: false,
  isAdmin: false,
  user: {
    id: null,
    username: '',
    token: '',
    stuId: '',
    phone: '',
    email: '',
    imageUrl: '' ,
    createTime: [],
  },
  paper: {
    name: '',
    subject: '',
    grade: '',
    type: '',
    pageCount: 0,
    questionCount: 0,
    containAnswer: false,
    path: '',
    supplement: '',
    items: [
        1,1,1
    ]
  }
})