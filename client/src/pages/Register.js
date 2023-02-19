import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Card, Link, Container, Typography } from '@material-ui/core';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundColor: '#383358',
    color: '#ffffff'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#383358',
  color: '#ffffff',
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle>
      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Get started
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              The perfect exam app for your class.
            </Typography>
          </Box>

          <RegisterForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
