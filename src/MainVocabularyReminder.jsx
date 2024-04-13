import React from "react";
import './MainVocabularyReminder.css';

export default function MainVocabularyReminder (){
    return(
    <div className="vocabulary-reminder-block"> 
        <button className="find-button">Review Words</button>
        <div> MainVocabularyReminder </div>
   
        <table class="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Word</th>
                <th scope="col">Meaning</th>
                <th scope="col">Example in the book</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}