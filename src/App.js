import React, { Component } from "react";
import { FixedSizeList as List } from "react-window";
import { createDummyData } from "./utils";

const dataList = createDummyData(1000);

class App extends Component {
  state = {
    virtual: false
  };

  renderVirtual() {
    return (
      <List
        height={window.visualViewport.height}
        itemCount={1000}
        itemSize={366}
        width="100%"
      >
        {this.renderVirtualCard}
      </List>
    );
  }

  renderDefault() {
    return <div className="App">{dataList.map(this.renderCard)}</div>;
  }

  renderVirtualCard = ({ index, style }) => {
    return this.renderCard(dataList[index], style);
  };

  renderCard = (p, s) => {
    let style = {};
    if (typeof s === "object") {
      style = s;
    }

    return (
      <div style={style}>
        <div className="card">
          <img src={p.image} />
          <div className="details">
            <span className="title">{p.title}</span>
            <span className="subtitle">{p.subtitle}</span>
            <div className="company">{p.company}</div>
          </div>
          <p className="description">{p.description}</p>
          <div className="tags">
            {p.tags.map(t => (
              <span
                className="tag"
                style={{
                  backgroundColor: t.color,
                  boxShadow: `0px 3px rgba(0,0,0,0.5), 0px 3px ${t.color}`
                }}
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <label className="switch">
          Show Virtual?
          <input
            checked={this.state.virtual}
            type="checkbox"
            onChange={() => {
              this.setState(state => ({
                virtual: !state.virtual
              }));
            }}
          />
        </label>
        {this.state.virtual ? this.renderVirtual() : this.renderDefault()}
      </div>
    );
  }
}

export default App;
