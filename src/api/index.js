import { axios } from '@xcedu/web-share'
// 新建保存
export function createArticle (form) {
  return axios.post('/api-personalized/advise/plate/create', form)
}
// 查看
export function getPostById (id) {
  return axios.get('/api-personalized/advise/article/view?id=' + id)
}

// 获取未发布的帖子信息
export function getNoPubArticle (id) {
  return axios.get('/api-personalized/advise/article/getNoPubArticle?id=' + id)
}

// 修改提交数据
export function updateArticle (form) {
  return axios.post('/api-personalized/advise/plate/update', form)
}

// 热门排行榜
export function hotList (params) {
  return axios.get('/api-personalized/advise/article/articleRankList', { params: params })
}

// 获取所有板块列表
export function allPlate () {
  return axios.get('/api-personalized/advise/plate/findAll')
}

// 根据板块id获取分页帖子
export function getArticleByPlate (params) {
  return axios.get('/api-personalized/advise/article/pagelist', { params: params })
}

// 获取用户统计数
export function getMyArticleCount () {
  return axios.get('/api-personalized/advise/article/findCount')
}

// 判断当前用户是否拥有管理员权限
export function userManagePlate () {
  return axios.get('/api-personalized/advise/plate/userManagePlate')
}

// 获取帖子的评论列表
export function commentList (params) {
  return axios.get('/api-personalized/advise/comment/pageList', { params: params })
}

// 保存评论
export function saveComment (form) {
  return axios.post('/api-personalized/advise/comment/save', form
  )
}

// 删除帖子
export function deleteArticle (params) {
  return axios.delete('/api-personalized/advise/article', { params }
  )
}

// 收藏帖子
export function attentionArticle (params) {
  return axios.get('/api-personalized/advise/article/attention', { params: params }
  )
}

// 点赞帖子
export function likeArticle (params) {
  return axios.get('/api-personalized/advise/article/like', { params: params }
  )
}

// 置顶帖子
export function topArticle (params) {
  return axios.get('/api-personalized/advise/article/articleTop', { params: params }
  )
}
// 通知列表
export function getNoticeList (flag) {
  return axios.get('/api-personalized/advise/notice/pageList?flag=' + flag)
}
// 获得帖子列表
export function getArticleList (params) {
  return axios.get('/api-personalized/advise/article/pagelist', { params: params })
}
// 通过id删除帖子
export function deleteArticleById (params) {
  return axios.delete('/api-personalized/advise/article', { params: params })
}
// 将文章置顶
export function articleTop (params) {
  return axios.get('/api-personalized/advise/article/articleTop', { params: params })
}
// 获得板块列表
export function getPlateList () {
  return axios.get('/api-personalized/advise/plate/findAll')
}
// 板块分页
export function getPlatePage (params) {
  return axios.get('/api-personalized/advise/plate/pageList', { params: params })
}
// 通过id删除帖子
export function deletePlateById (params) {
  return axios.get('/api-personalized/advise/plate/delete', { params: params })
}
// 选人接口
export function getChooseUserDataByParams (params) {
  return axios.get('/api-base/rangeScopes', { params })
}
// 选人输入
export function gettSearchListByValue (params) {
  return axios.get('/api-base/rangeScopes?type=search', { params })
}
