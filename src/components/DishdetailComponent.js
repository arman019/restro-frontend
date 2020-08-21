import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state={
       
        };
    }


    renderDish(){
        
        
          return(
            <div  key={this.props.dish.id} className="col-12 col-md-5 m-1" >
            <Card >
              <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name }   />
              
              <CardBody>
                 
                <CardTitle><h4>{this.props.dish.name}</h4></CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
             
            </Card>
            </div>
                
  
          );
  
       
        
      }
         /* <CardText>{dish.comments.map(dish => <div><h1>rating :{dish.rating}</h1><br/>{dish.comment}</div>)}</CardText>             
              </CardBody> */


     


      renderComments(){
        const comment=this.props.dish.comments.map((comment)=>{

            return(
                <li key={comment.id}>
                <p><h4>{comment.comment}</h4></p>
                <p><h4>--{comment.author} ,  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}  </h4></p>
              
            </li>
        );
        
    });

        return(
            
            <div className="col-12 col-md-6 m-1" >
                <h4>Comment</h4>
                <ul className='list-unstyled'>
                    {comment}
                </ul>
            </div>

            

        );
    }


    render(){
        if (this.props.dish == null)
        {

        return (<div></div>)
        }

        else{

          

            const dishItem = this.renderDish();
            const commentItem = this.renderComments();
        
            return (
                <div className="container">

                <div className="row">
                    {dishItem}
                    {commentItem}
                           
                        </div>
                </div>
            );
        }
    }
        
}

export default DishDetail;