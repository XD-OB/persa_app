/** @jsx jsx */

import { jsx } from 'theme-ui';
import Link from 'next/link'
import { Form, FormControl, Button, FormLabel, FormGroup , Container} from 'react-bootstrap'


const contentStyle = {
  subscribeForm: {
    width: '100%',
    mx: 'auto',
    '[type="email"]': {
      border: '1px solid #D4DAE2',
      borderRadius: '7px',
      fontFamily: 'body',
      fontSize: [1, 2, 3],
      fontWeight: 'body',
      color: 'heading',
      py: 1,
      px: [3, 5],
      backgroundColor: 'transparent',
      transition: 'all 0.25s',
      height: ['50px', '60px'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
        borderColor: 'primary',
      },
      '::placeholder': {
        color: '#9A9CB2',
        opacity: 1,
      },
    },
  },
  Button: {
    color: 'red',
  },
};


export default function Subscribe() {
  return (
    <div className="subscribe__area">
      <Container className="Content container" style={contentStyle}>
        <Form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl type="text" placeholder="useremail@domain.com" className="mr-sm-2" />
            </FormGroup>
            <FormGroup>
                <FormLabel>Password <Link href="/"><a>Forgot Password?</a></Link></FormLabel>
                <FormControl type="password" className="mr-sm-2" />
            </FormGroup>
            <Button className="btn-lg btn-block" variant="primary">Sign In</Button>
        </Form>
      </Container>
    </div>
  );
}
