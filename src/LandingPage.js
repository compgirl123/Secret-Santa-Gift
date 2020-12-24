import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Icon,
    Image
} from 'semantic-ui-react';
import myImage from './cakelovers.jpg';
import myImage1 from './umbrellalovers.jpg';
import myImage2 from './cake.jpg';
import myImage3 from './umbrelladance.jpg';
import myImage4 from './claudia.jpg';
import myImage5 from './friends.jpg';
import Music from './Music.js'
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Slider from 'infinite-react-carousel';



const elementsinitial = [];
var elements = [];
for (var x = 0; x < 1001; x++) {
    elementsinitial.push(x);
}

for (var x = 1; x < 1001; x++) {
    elements[x] = "" + x + " Wishes for a happy 2021 for Cat and Jenny 👫 🎉 💍! ";
}

const SimpleSlider = () => (
    <Slider dots>
      <div>
        <h3><Image src={myImage} fluid /></h3>
      </div>
      <div>
        <h3><Image src={myImage1} fluid /></h3>
      </div>
      <div>
        <h3><Image src={myImage2} fluid /></h3>
      </div>
      <div>
        <h3><Image src={myImage3} fluid /></h3>
      </div>
      <div>
        <h3><Image src={myImage4} fluid /></h3>
      </div>
      <div>
        <h3><Image src={myImage5} fluid /></h3>
      </div>
    </Slider>
  );

/*elements =  [
   {
     name: "🎉 William",
     location: "👫 Lagos",
     car: "💍 Honda"
   },
   {
     name: "😃 Chris",
     location: "🏘️ Moon",
     car: "🚘 Tesla"
   },
   {
     name: " 😃 Rose",
     location: "🏘️ Venice",
     car: "🚘 Pagani"
   },
   {
     name: "😃 Mike",
     location: "🏘️ Milan",
     car: "🚘 Rolls Royce"
   },
   {
     name: "😃 Liz",
     location: "🏘️ Beirut",
     car: "🚘 Mercedes"
   }
 ];*/

 
  

export default () => (
    <Grid centered columns={2}>
        <Grid.Column>
            <Header as="h2" textAlign="center">
                Congrats Cat and Jenny
            </Header>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
                    </video>
            <Segment>
                <SimpleSlider/>
                <Form size="large">
                    <Message
                        success
                        icon='thumbs up'
                        header='Nice job!'
                        content='Your profile is complete.'
                    />

                    
                    <div>
                    </div>
                    {elements.map((user, index) => (
                        <div key={index} class="test" >
                            <h3>{user}</h3>
                            <p></p>
                        </div>
                    ))}
                    
                </Form>
            </Segment>
            <Message>
                1000 wishes for a happy 2021!
      </Message>
        </Grid.Column>
    </Grid>
);
