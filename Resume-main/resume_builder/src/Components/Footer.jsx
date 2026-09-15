import React from 'react';
import {
  Box,
  Container,
  Divider,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0f172a',
        color: '#e2e8f0',
        mt: 6,
        py: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ justifyContent: 'space-between' }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Resume Builder
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 420, color: 'rgba(255,255,255,0.75)' }}>
              Create polished, ATS-friendly resumes in minutes with smart suggestions,
              professional templates, and easy export options.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {[
                ['Home', '/'],
                ['Resume Steps', '/steps'],
                ['Create Resume', '/form'],
                ['Downloads', '/downloads'],
              ].map(([label, to]) => (
                <MuiLink
                  key={label}
                  component={RouterLink}
                  to={to}
                  underline="hover"
                  sx={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  {label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5 }}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                support@resumebuilder.com
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
                24/7 Resume Help
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.15)' }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} Resume Builder. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            {['Privacy', 'Terms', 'Help'].map((item) => (
              <MuiLink
                key={item}
                href="#"
                underline="hover"
                sx={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {item}
              </MuiLink>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
