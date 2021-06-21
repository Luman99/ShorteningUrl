import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import { Container, Col } from 'react-bootstrap';
import { Label, Button, Field } from '../../util/ThemeComponents'
import { Link } from "react-router-dom";



export const SuccessFragment = ({ next, next2, previous, onChange, btnDisabled, data, short }) => {

    return (
        <div>
            <FormContainer>
                <Form.Row className="pt-4">
                        <Form.Group as={Col}>
                            <Button
                                primary
                                onClick={next2}
                                onClick={next}

                                disabled={btnDisabled}
                            >
                                {short}
                            </Button>
                        </Form.Group>
                    </Form.Row>
                <Form.Row className="pt-4">
                        <Form.Group as={Col} xs={6}>
                            <Button onClick={previous}>Back</Button>
                        </Form.Group>
                    </Form.Row>
            </FormContainer >

        </div>
    );
}


const MultilineGroup = styled(Form.Group)`
    display: inline-grid !important;
`;


const FormContainer = styled(Container)`
    max-width:600px;

`;
