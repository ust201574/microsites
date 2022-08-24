import React from "react";
import '../css/styles.css'
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
                item["data-buildertype"] === "date" ||
                item["data-buildertype"] === "password") && (
                  <Col className="form-group" key={item.key}>
                    <FormGroup>
                      {item.label ? <>
                        <Label for="phone" className="form-label">
                          {item.label}
                          <span className="required">&nbsp;{item.required && "*"}</span>
                        </Label>
                      </> : <></>}
                      <Input
                        id={item.label}
                        type={item["type"]}
                        onChange={onHandleInput}
                        min={item.min}
                        max={item.max}
                        required={item.required}
                        pattern={item.pattern}
                        title={item["pattern-message"]}
                        placeholder={item.placeholder}
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
              {item["data-buildertype"] === "dropdown" && (
                <Col className="form-group" key={item.key}>
                  <select id="framework">
                    <option value="1">Angular</option>
                    <option value="2">React</option>
                    <option value="3">Vue.js</option>
                    <option value="4">Ember.js</option>
                  </select>
                </Col>
              )}
              {item["data-buildertype"] === "textarea" && (
                <Col className="form-group" key={item.key}>
                  <div>
                    <Label for="phone" className="form-label">
                      {item.label}
                      <span className="required">&nbsp;{item.required && "*"}</span>
                    </Label>
                  </div>
                  <div>
                    <textarea
                      id={item.label}
                      type={item["type"]}
                      required={item.required}
                      onChange={onHandleInput}
                      required={item.required}
                    />
                  </div>
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
                  <p className="radio-label">{item.label}</p>
                  {item["data-elements"].map((data, idx) => (
                    <div>
                      <input type="radio" name={data.value} value={data.text} key={idx} onChange={radioChange()} />
                      <Label for="radio" className="form-label">
                        &nbsp;{data.text}
                        <span className="required">&nbsp;{item.required && "*"}</span>
                      </Label>
                    </div>
                  ))}
                </Col>
              )}
              {item["data-buildertype"] === "checkbox" && (
                <Col className="form-group" key={item.key}>
                  <FormGroup>
                    {console.log(item)}
                    <input type="checkbox" id={item.label} name={item.label} value={item.label} />
                    <Label for={item.label} className="form-label">
                      &nbsp;{item.label}
                      <span className="required">&nbsp;{item.required && "*"}</span>
                    </Label>
                  </FormGroup>
                </Col>
              )}
              {item["data-buildertype"] === "label" && (
                <Col className="form-group" key={item.key}>
                  <Label for="radio" className="form-label">
                    &nbsp;{item.content}
                    <span className="required">&nbsp;{item.required && "*"}</span>
                  </Label>
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
