'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction() 


    //auto render template file index_index.html
    return this.display();
  }


  addAction() {
    let model = this.model('users');
    let insertId = model.thenAdd({ name: '2good', age: 19 },{name: '2good'});

    this.assign({
      title: insertId
    });
    return this.display();

    model
    
  }
}