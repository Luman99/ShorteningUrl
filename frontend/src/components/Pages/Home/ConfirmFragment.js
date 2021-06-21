import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import { Container, Col } from 'react-bootstrap';
import { Label, Button, Field } from '../../util/ThemeComponents'


export const ConfirmFragment = ({ next, previous, onChange, btnDisabled, text }) => {
    return (
        <div>
            <FormContainer>
                <Form onSubmit={event => event.preventDefault()}>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Label>Url</Label>
                            <Field
                                onChange={onChange}
                                type="url"
                                name="text"
                                defaultValue={text}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="pt-4">
                        <Form.Group as={Col}>
                            <Button
                                primary
                                onClick={next}
                                disabled={btnDisabled}
                            >
                               Confirm
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
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
