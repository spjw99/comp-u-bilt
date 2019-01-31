// import axios
import axios from 'axios';

export default {
/*****************************************
* COMPUTER API
***************************/
  /*********************
   * INDEX PAGE
   **********************/
  // by default, show built computers by budgets
  getComputers: function() {
    return axios.get('/api/computer')
  },
  getComputersByPrice: function(price){
    return axios.get(`/api/computer/${price}`)
  },

  /**************************
   * USER SAVE PROGRESS PAGE
   ***************************/

  // save progress for user id
  addToCart: function(computerData) {
    return axios.post('/api/computer/addToCart', computerData)
  },
  // get saved progress by user id
  getUserSavedComputer: function(userId) {
    return axios.get(`/api/computer/${userId}`)
  },

  /*********************
   * ADMIN PAGE
   **********************/
  createComputer: function(computerData){
    return axios.post('/api/computer',computerData)
  },
  updateComputer: function(computerId) {
    return axios.put(`/api/computer/${computerId}`)
  },
  deleteComputer: function(computerId) {
    return axios.delete(`/api/computer/${computerId}`)
  },


/*******************************************************************
* PART API
*****************************************************/
   /*********************
   * BUILD PAGE
   **********************/
  //get all CPUS
  getCpusByTags: function(tagId){
    return axios.get(`/api/part/cpu/${tagId}`)
  },
  //get all RAMS
  getRamsByTags: function(tagId){
    return axios.get(`/api/part/ram/${tagId}`)
  },
  //get all HDDS
  getHddsByTags: function(tagId){
    return axios.get(`/api/part/hdd/${tagId}`)
  },
  //get all GPUs
  getGpusByTags: function(tagId){
    return axios.get(`/api/part/gpu/${tagId}`)
  },
  //get all CASES
  getCasesByTags: function(tagId){
    return axios.get(`/api/part/case/${tagId}`)
  },
  /*********************
   * ADMIN PAGE
   **********************/
  createPart: function(partData){
    return axios.post('/api/part', partData)
  },


/*******************************************************************
* ORDER API
*****************************************************/
  getOrder : function(){
    return axios.get(`/api/order`)
  },
  getUserOrders: function(){
    return axios.get('/api/order/getUserOrders')
  },
  placeOrder : function(orderData){
    return axios.post('api/order/placeOrder', orderData)
  },
//   sendSMS : function(smsData){
//     return axios.post('/api/order/sms', smsData)
//   }
}