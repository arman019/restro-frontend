import React,{Component} from 'react';
import { Card, CardImg,  CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem ,Modal,ModalBody,ModalHeader,Label,Button,Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm ,Errors} from 'react-redux-form';
import{Loading } from './LoadingComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component{
constructor(props){
  super(props);

  this.state={
    isModalOpen :false
  }
  this.toggleModal=this.toggleModal.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);

}


toggleModal(){
  this.setState({
    isModalOpen : !this.state.isModalOpen
  });
}

handleSubmit(values){ 
  this.toggleModal();
  this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
}


  render(){
    return(
    <div className="container">
        <div className="row">
                      
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader  toggle={this.toggleModal}>Comment Sumbission </ModalHeader>
              <ModalBody>
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    
                    <Row className="form-group">
                      <Label htmlFor="rating" md={12}> Rating</Label>
                        <Col md={{size:12}}>
                          <Control.select className="form-control"
                              model=".rating" 
                              name="rating">                                                 
                              <option >1</option>
                              <option >2</option>
                              <option >3</option>
                              <option >4</option>
                              <option >5</option>
                          </Control.select>
                        </Col>
                    </Row>

                      <Row className="form-group">
                      <Label htmlFor="author" md={8}>Your Name</Label>
                            <Col md={12}>
                              <Control.text 
                              className="form-control"
                              model=".author" 
                              id="author"
                              name="author " 
                              placeholder="Your Name"
                              validators={{
                                required,minLength:minLength(3),maxLength:maxLength(15)
                              }}
                              />
                              <Errors className="text-danger"
                              model=".author"
                              show="touched"
                              messages={{
                                required: 'Required ',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                              }} />
                            </Col>
                      </Row>

                      <Row className="form-group">                        
                          <Label htmlFor="comment" md={4} >Comment</Label>                                                     
                              <Col md={12}>
                                <Control.textarea model=".comment" id="comment" name="comment" rows="6"
                                className="form-control" />                                     
                              </Col>                                                                                                                                                                 
                      </Row>

                      <Row className="form-group">
                        <Col md={{size :10}}>                                  
                          <Button type="submit" color="primary" >
                                  Submit
                          </Button>                             
                        </Col>   
                      </Row>

                  </LocalForm>
            </ModalBody>           
      </Modal> 
        
    </div>

        <div className="row">
          <Button outline onClick={this.toggleModal}>
              <span className="fa fa-pencil" /> Submit Comment
            </Button>
        </div>     
</div>  
    );
  }


}


function RenderDish({props}){
          return(
            <div   className="col-12 col-md-5 m-1" >
            <Card >
              <CardImg width="100%" src={props.dish.image} alt={props.dish.name }   />             
              <CardBody>               
                <CardTitle><h4>{props.dish.name}</h4></CardTitle>
                <CardText>{props.dish.description}</CardText>
              </CardBody>             
            </Card>
            </div>             
          ); 
      }
/* <CardText>{dish.comments.map(dish => <div><h1>rating :{dish.rating}</h1><br/>{dish.comment}</div>)}</CardText>             
              </CardBody> */


  function  RenderComments({props}){
        const comment=props.comments.map((comment)=>{

            return(          
              <li key={comment.id}>
                <span><h4>{comment.comment}</h4></span>
                <span><h4>--{comment.author} ,  
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}  </h4></span><br/>             
              </li>                                                                       
        );
        
    });

        return(
            
            <div className="col-12 col-md-6 m-1" >
                <span ><h4>Comment</h4></span>
                <ul className='list-unstyled'>
                    {comment}
                </ul>
              <CommentForm dishId ={props.dish.id} addComment={props.addComment}/>
            </div>

            

        );
    }


  const DishDetail=(props)=>{

    if(props.isLoading){
      return(
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }

    else if(props.errMess){
      return(
        <div className="container">
          <div className="row">
          <h4>{props.errMess}</h4>
          </div>
        </div>
      );
    }

    else if(props.dish != null){      
     //  const dishItem = this.RenderDish(props);
    // const commentItem =this. RenderComments(props);    
        return (
        <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>{props.dish.name}</h3>
                  <hr />
              </div>                
          </div>
              <div className="row">
                <RenderDish props={props}/>
                <RenderComments props={props} />                                     
              </div>                           
        </div>
        );
    }

      else
      {
        return (<div></div>)
      }

  }      
          
export default DishDetail;