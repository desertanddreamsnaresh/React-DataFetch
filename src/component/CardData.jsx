import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class CardData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (datalist) => {
          this.setState({ datalist: datalist });
        },
        (error) => {
          alert(error);
        }
      );
  }

  render() {
    return (
      <>
        <div>
          <h1 style={{textAlign:'center'}}>Card Data With Class Components</h1>
          <Container>
            <Row
              className="justify-content-md-center"
              style={{ margin: "30px", padding: "10px" }}
            >
              {this.state.datalist.map((data, id) => (
                <Card key={data.id}>
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.body}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default CardData;
