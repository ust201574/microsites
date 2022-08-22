import React from "react";

import { LinkContainer } from "react-router-bootstrap";
import { Form, Input, Row, Col, FormGroup, Label, Button } from "reactstrap";

function MyForm(props) {
  const [inputs, setInputs] = React.useState({});

  const onHandleInput = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
    console.log(inputs);
  };

  const radioChange = () => {
    // radio change
  }

  return (
    <div className="row">
      <section className="py-5 px-5 mx-auto">
        <h1 className="hero-heading mb-0">{props.data.label}</h1>
        <p className="text-muted mb-5">{props.data.subtitle}</p>
        <Form>
          {props.data.items.map((item, idx) => (
            <>
              {(item["data-buildertype"] === "input" ||
                item["data-buildertype"] === "email" ||
                item["data-buildertype"] === "textarea" ||
                item["data-buildertype"] === "date" ||
                item["data-buildertype"] === "password") && (
                  <Col className="form-group" key={item.key}>
                    <FormGroup>
                      <Label for="phone" className="form-label">
                        {item.label}
                      </Label>
                      <Input
                        id={item.label}
                        type={item["data-buildertype"]}
                        required={item.required}
                        onChange={onHandleInput}
                      />
                    </FormGroup>
                  </Col>
                )}
              {item["data-buildertype"] === "link" && (
                <Col className="form-group" key={item.key}>
                  <LinkContainer to={item.to}>
                    <a>{item.label}</a>
                  </LinkContainer>
                </Col>
              )}
              {item["data-buildertype"] === "button" && (
                <Col className="form-group" key={item.key}>
                  <FormGroup>
                    <Button type="submit">{item.content}</Button>
                  </FormGroup>
                </Col>
              )}
              {item["data-buildertype"] === "radiogroup" && (
                <Col className="form-group" key={item.key}>
                  <FormGroup>
                    {item["data-elements"].map((data, idx) => (
                      <>
                        <Label for="radio" className="form-label">
                          {data.text}
                        </Label>
                        <input type="radio" name={data.value} value={data.text} key={idx} onChange={radioChange()} />
                      </>
                    ))}
                  </FormGroup>
                </Col>
              )}
            </>
          ))}
        </Form>
      </section>
    </div>
  );
}

export default MyForm;
