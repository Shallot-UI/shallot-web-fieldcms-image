import React from 'react'
import { Meta, Story } from '@storybook/react'
import { DEFAULT_THEME } from '@shallot-ui/theme'
import { ThemeProvider } from 'styled-components'

import { Image, FieldImageProps } from '../src/components/Image'
import { Fold, GlobalStyle, Row } from '@shallot-ui/web'
import { EXAMPLE_IMAGE } from './data'

const meta: Meta = {
  title: 'Image',
  component: Image,
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<FieldImageProps> = (args) => (
  <ThemeProvider theme={DEFAULT_THEME}>
    <GlobalStyle />
    <Fold alignCenter alignMiddle backgroundColor="Shading.125">
      <Row alignBottom>
        <Image
          {...args}
          image={EXAMPLE_IMAGE}
          unitWidth={10}
          radius="md"
          unitsRight={2}
          transformation="film"
        />
        <Image
          {...args}
          image={EXAMPLE_IMAGE}
          unitWidth={20}
          radius="md"
          unitsRight={2}
          transformation="native"
        />
        <Image
          {...args}
          image={EXAMPLE_IMAGE}
          unitWidth={30}
          radius="xl"
          transformation="square"
          elevation="hover"
        />
      </Row>
    </Fold>
  </ThemeProvider>
)

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})

Default.args = {}
