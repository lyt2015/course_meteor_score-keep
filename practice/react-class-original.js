class Test extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

var jsx = (
  <div>
    <Test text="p-tag" />
  </div>
)
