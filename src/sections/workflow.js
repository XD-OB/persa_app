/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

const data = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function WorkFlow() {
  return (
    <section sx={{ variant: 'section.workflow' }}>
      <Container>
        <SectionHeader
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={{ variant: 'text.heading' }}>{item.title}</Heading>
                <Text sx={styles.wrapper.description}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 3],
    pb: [0, null, null, null, null, null, null, null, 5],
    mb: -1,
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, 'left'],
    px: [0, 5, 0],
  },

  iconBox: {
    flexShrink: 0,
    mb: [4, null, null, 0],
    fontSize: [8, 9, null, null, 10, null, null, 11],
    fontWeight: 300,
    fontFamily: 'special',
    color: 'heading',
    lineHeight: 1,
    letterSpacing: 'heading',
    mr: ['auto', null, 0, 4, null, null, null, 5],
    ml: ['auto', null, 0],
    mt: [0, null, null, -1],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    description: {
      fontSize: [1, 2],
      fontWeight: 'body',
      lineHeight: 1.9,
      pt: 2,
    },
  },
};
