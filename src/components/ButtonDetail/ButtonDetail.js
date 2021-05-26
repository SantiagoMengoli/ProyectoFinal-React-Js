import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './ButonDetail.css'

function ButtonExampleAnimated (props) {
  const {onAdd} = props;
  return ( <div>
    <Button onClick={onAdd} className="buttonCarrito" animated='vertical'>
      <Button.Content hidden>Terminar Compra</Button.Content>
      <Button.Content visible>
        <Icon name ='shop' />
      </Button.Content>
    </Button>
  </div>)
 
}
export default ButtonExampleAnimated
