import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'

const Navbar = () => {
  return (
    <nav>
        <Container>
            <Flex className='flex '>
                <div>
                   <Image imgsrc="images/logo.png"/>
                </div>
                <div>sadfhsadf</div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar