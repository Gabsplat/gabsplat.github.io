import React from 'react';
import Masonry from 'react-masonry-component';
import Spinner from 'react-bootstrap/Spinner';

import { unsplash } from './UnsplashConfig';
import './App.css'

import { Container, Form, Navbar, Image } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaSearch, FaInfoCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md'

import Modal from 'react-modal';

Modal.setAppElement('#root')


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      info: {},
      title: '',
      isFetching: false,
      showModal: false,
      item: {}
    }
    

  }

  

  handleTitle = (e) => {

      this.setState({
        title: e.target.value
      })

  }

  handleSubmit = (event) => {

      this.setState({
        isFetching: true
      });

      unsplash.search.photos(this.state.title, 1, 50, {orientation:"portrait"})
        .then(res => res.json())
        .then(json =>{
          console.log(json);
          this.setState({
            info: json,
            isFetching: false
          })
        });

      event.preventDefault();

  }

  closeModal = () => {

      this.setState({
        showModal: false
      })

  }

  openModal = (item) => {

    console.log('Item', item)

      this.setState({
        showModal: true,
        item: item
      });

  }


  render(){
    return(
      <div style={{height: '100%', width: '100%', backgroundColor: 'rgba(32, 32, 32, 0.288)'}}>
        
        <Container style={{height: '100vh'}}>     


          {/* NAVBAR */}

          <Navbar style={{width: '100%', padding: 0, height:'18%', color: 'white'}}>
              <Navbar.Brand>
                <a href="./" style={{color: 'white'}}>KreativeImg</a>
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <IconContext.Provider value={{size: '2em', color: 'white', className: 'info'}}>
                    <FaInfoCircle />
                  </IconContext.Provider>
                </Navbar.Text>
              </Navbar.Collapse>    
          </Navbar> 

          {/* BUSCADOR */}

          <div className={Object.entries(this.state.info).length > 0 ? 'formAlignTop' : 'formAlign'}>
            <Form onSubmit={this.handleSubmit}>
              <h1 className="mainTitle">Best free stock photos in one place.</h1>
              <div style={{position: 'relative'}}>
                <IconContext.Provider value={{size:'1.3em', color: 'white', className:"iconInput"}}>
                  <FaSearch onClick={this.handleSubmit} />
                </IconContext.Provider>
                <input type="text" value={this.state.title} onChange={this.handleTitle} placeholder="Search some images.." />    
              </div>
            </Form>

          </div>

          {/* IMAGENES (DESPUES DE SER BUSCADAS) */}
            
          {Object.entries(this.state.info).length === 0 ?

            (this.state.isFetching && <Spinner animation="border" variant="light"/>)
            
            :
            
            <Masonry
            className={'my-gallery-class'} // default ''
            elementType={'ul'} // default 'div'
            options={{transitionDuration:1}} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false        
            >
                {this.state.info.results.map((item)=>{
                  return <img key={item.id} onClick={ () => {

                      this.openModal(item)

                  }} className="imgMasonry" src={item.urls.small} alt={item.urls.alt_description}/>
                })}
                
            </Masonry>
          }   

          {/* MODAL CUANDO CLICKEAS UNA IMG */}

          { Object.entries(this.state.item).length > 0 &&
          <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.closeModal}
            className="modalInfo"
            overlayClassName="modalOverlayInfo"
            contentLabel="Example Modal"
          >
            <div className="modalData">
              <IconContext.Provider value={{ size: '2em', className: 'mdClose'}}> <MdClose onClick={this.closeModal} /> </IconContext.Provider>
              
              <div className="user">
                <Image src={this.state.item.user.profile_image.small} roundedCircle/>
                <a href={this.state.item.user.links.html}>{this.state.item.user.name}</a>
              </div>

              <img className="imgModal" src={this.state.item.urls.regular} alt={this.state.item.urls.alt_description}/>

              <a href={this.state.item.links.download + '?force=true'}>Download</a>

            </div>
          </Modal>
          }


              {/* <Modal
                dialogClassName="modal-90w"
                show={this.state.showModal}
                onHide={() => this.setState({showModal:false})}
              >
                <Modal.Body>
                  {Object.entries(this.state.item).length > 0 && <img key={this.state.item.id} style={{padding: '5px',   width: '33%'}} src={this.state.item.urls.small} alt={this.state.item.urls.alt_description}/>}
                </Modal.Body>
              </Modal> */}

        </Container>
      </div>

    )

  }
}

export default App;
