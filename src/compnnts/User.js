import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function User({ userList }) {
  return (
    <div>
      <Card  style={{marginTop: '20px', width: "30rem",height:'20rem' }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <p>Name: {userList.name}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>UserName: {userList.username}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>Email: {userList.email}</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default User;
