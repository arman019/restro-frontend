import React from 'react';
import { Card, CardImg,  CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';



   

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


  const DishDetail=(props)=>{

    if (props.dish == null)
    {

    return (<div></div>)
    }

    else{

      

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

  }      
          
export default DishDetail;