import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

function List(props) {
  const { articleList } = props;
  return (
    <div>
      {articleList.map(item => {
        return (
          <div className="list-item" key={item.id}>
            <img src={item.img} alt="img" />
            <div className="list-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapState = state => ({
  articleList: state.home.articleList,
});

export default connect(mapState, null)(List);
