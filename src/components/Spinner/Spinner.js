import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const Spinner = () => (
  <div>
   

    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Cargando</Loader>
      </Dimmer>

      <Image src='https://img2.freepng.es/20191023/exz/transparent-soccer-ball-soccer-clipart-png-transparent-azpng5db11576d60270.6520987315718864548766.jpg'  width="150px" />
    </Segment>
  </div>
)

export default Spinner
