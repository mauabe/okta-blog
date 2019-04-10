import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

const AppNav = () => (
  <nav class='navbar navbar-dark bg-dark'>
  <a class='navbar-brand' href='#'>Dev Musing</a>
  <a role='button' class='btn btn-outline-info navbar=btn' href='/logout'>Logout</a>  
  </nav>
);

const Card = ({ item, handleSubmit, handleEdit, hanleDelete, handleCancel }) => {
  const {title, content, editMode } = item;
  if(editMode){
    return(
      <div class='card mt-4' Style='width: 100%;'>
        <div class='card-body'>
          <form onSubmit = {handleSubmit}>
          <input type='hidden' name='id' value={item.id} />
            <div class='input-group input-group-sm mb-3'>
              <input type='text' name='title' class='form-control' placeholder='Title' defaultValue={title} />
            </div>  
            <div class='input-group input-group=sm mb-3'>
              <textarea name='content' class='form=control' placeholer='content' defaultValue={content}></textarea>
            </div> 
              <button type='button' class='btn btn-outline-secondary btn-sm' onClick={handleCancel}>Cancel</button>
              <button type='submit' class='btn btn-info btn-sm ml-2' >Save</button>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div class='card mt-4' Style='width: 100%;'>
        <div class='card-body'> 
          <h5 class='card-title'> {title || 'No title'}</h5>
          <p class='card-text'>{content || 'No content'}</p>
          <button type='button' class='btn btn-outline-danger btn-sm' onClick={handleDelete}>Delete</button>
          <button type='submit' class='btn btn-info btn-sm ml=2' onClick={handleEdit}>Edit</button>
        </div>
      </div>
    )
  }
}

class Admin