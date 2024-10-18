import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Assuming you have a separate CSS file for custom styles

const ExtraCreditAssignment = () => {
  return (
    <div>
      <header className="bg-light py-2">
        <div className="container d-flex align-items-left">
          <h5 className="m-0">ICS 314 Fall 2024</h5>
          <nav>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link" href="#">Modules</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Outcomes</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Readings</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Experiences</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Schedule</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-white p-0">
            <li className="breadcrumb-item"><a href="#" className="text-primary">Home</a></li>
            <li className="breadcrumb-item"><a href="#" className="text-primary">Modules</a></li>
            <li className="breadcrumb-item"><a href="#" className="text-primary">UI Design (React)</a></li>
            <li className="breadcrumb-item active" aria-current="page">XC: Your Choice in React</li>
          </ol>
        </nav>

        <h1 className="mt-4 mb-4">Extra Credit: Reimplement Your Choice in React</h1>

        <p>Reimplement your Bootstrap 5 Your Choice mockup using React, following the same process for the Island Snow React reimplementation:</p>

        <ul>
          <li>Set up your development environment</li>
          <li>Create your skeleton React app.</li>
          <li>Build the page</li>
          <li>Finish, commit, and push your repo to GitHub.</li>
        </ul>

        <h2 className="mt-4">Submission instructions</h2>

        <p>By the time and date indicated in Laulima, submit this assignment via Laulima.</p>

        <p>Your submission should contain a link to the GitHub repository you created. Make sure you include the complete URL so that I can click on it in my mailer. Note: the final commit to this repo must have been made before the submission time and date, otherwise you will not receive credit for this assignment.</p>

        <p>You must now grant read access to this repo to the TA for your section. To do this:</p>

        <ul>
          <li>Retrieve your repository in a browser, then click on Settings. Depending upon the GitHub UI you are provided, youll then click on either Collaborators or Manage Access. Let us know if you cant find either of these.</li>
          <li>Search for aliremos, then click Add collaborator.</li>
          <li>The search for aliknd, then click Add collaborator.</li>
        </ul>

        <p>You will receive up to 50 Extra Credit Points for correctly completing this assignment.</p>

        <footer className="mt-5 py-3 bg-light text-center">
          <p className="mb-1">Cam Moore, Chad Morita, Dan Port, Brook Conner<br />
            Information and Computer Sciences<br />
            University of Hawaii<br />
            cmoore@hawaii.edu, chadmmm@hawaii.edu, dport@hawaii.edu, dbconner@hawaii.edu</p>

          <p className="mb-0 text-muted">
            Powered by the Morea Framework (Theme: spacelab)<br />
            Last update on: 2024-10-15 19:03:23 -1000<br />
            24 modules | 24 outcomes | 188 readings | 175 experiences
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ExtraCreditAssignment;