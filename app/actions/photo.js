/**
* @Date:   2017-01-22 11:49:34
* @Last modified time: 2017-02-04 15:56:36
*/

import * as types from '../constants/ActionTypes';

export function addPhoto(src){
  return {
    type : types.ADD_LOCAL_PHOTO,
    src
  }
}
