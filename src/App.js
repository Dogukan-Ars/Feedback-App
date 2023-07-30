import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutLink from "./components/AboutLink"
import { FeedbackProvider } from "./context/FeedbackContext"


function App() {
    return (
        <FeedbackProvider>
            <Router>
                {/* <Header bgColor='red' textColor="blue" /> */}
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                                {/* <Card>Hello World!</Card> */}
                            </>
                        }>

                        </Route>

                        <Route path="/about" element={<AboutPage />} />
                    </Routes>

                    <AboutLink />
                </div>
            </Router>
        </FeedbackProvider>
    )

}

export default App














    // const title = "Blog Post"
    // const body = "This is my blog post"
    // const comments = [
    //     { id: 1, text: 'comment one' },
    //     { id: 2, text: 'comment two' },
    //     { id: 3, text: 'comment three' }
    // ]

    // const loading = false
    // const showComments = true

    // if (loading) return <h1>Loading...</h1>

    // const commentBlock = (
    //     <div className="comments">
    //         <h3>Comments ({comments.length})</h3>
    //         <ul>
    //             {comments.map((comment, index) => (
    //                 <li key={index}>{comment.text}</li>
    //             ))}
    //         </ul>
    //     </div>)

    // return (
    //     <div className="container">
    //         <h1>{title.toUpperCase()}</h1>
    //         <p>{body}</p>

    //         {showComments && commentBlock}

    //     </div>
    //     // This code is without JSX would like this --> React.createElement('div', { className: 'container' }, React.createElement('h1', {}, 'My App'))
    //     // Also we can use like this javascript code --> {Math.random() * (5 + 5)}
    // )