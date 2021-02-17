/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';


export default function Support() {
  return (
    <section sx={{ variant: 'section.support' }} id="support">
      <Container>
        <SectionHeader
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    img: {
      height: [180, 'auto'],
    },
  },
};
