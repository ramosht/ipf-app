import React from 'react'
import { storiesOf} from '@storybook/react-native'
import {action} from '@storybook/addon-actions'

import Button from "@atoms/Button"
import {BufferView} from './Decorators'

storiesOf("Button", module)
  .add("default", () => (
    <Button actionOnPress={action("tapped-default")}>Press me</Button>
  ))
