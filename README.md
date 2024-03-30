# Netflix Clone

Link to live website: https://netflix-clone-plum-nine.vercel.app/

**Note**: The website wont be able to show data when using Jio network [TMDB site is unreachable on Jio network], kindly configure your DNS to 8.8.8.8 or please use a different network to view the site.

## Demo
[Project Demo](https://github.com/Niranjan5601/netflix-clone/assets/76723996/1cf90119-afe8-4922-b5be-6f7613c971ba)

## Features And Components Implemented
- Header with scroll effect
- Navigating to account page on click of user profile image
- Trailer Player on home page
- Movie Lists with hover effect and scroll based on arrow icon click
- Show details of the movie on click of movie card [Movie Trailer, Pause Play Video, Mute Unmute trailer audio, overview and other movie details]
- Footer
- Responsiveness

## Approach To The Assignment

- As already mentioned in the description of the assignment, I will be using Next.js, Typescript and Tailwind Css for styling.
- In order to show show movies and trailer of movies I will be getting data using [TMDB API]("https://www.themoviedb.org/")
- I will be using Redux toolkit as a state management tool to store data fetched from TMDB API and other app configs.
- To play videos I will be using iFrame and React Player
- To show the movie detail component I will be using material ui modal api.
- For icons I will be using React Icons
- To store the API safely I will be using .env file.

## Time Sheet
The below estimation also includes styling the component.

|                      Action                       |        Time Taken          | 
|:-------------------------------------------------:|:--------------------------:|
| Time taken to know about next js                  |     2 1/2 hr's             |
| Header                                            |       1 1/2 hr's           |
| Fetching Data and storing it in redux store       |     1 1/2 hr's             |
| Making Home page trailer player                   |       45 mins              |
| Making Movie Card and displaying them             |        1 hr's              | 
| Making Movie Detail component                     |        2 hr's              |
| Responsiveness                                    |        3 hr's              |
| Documentation                                     |        2 hr's              |

## Description of original code versus code sourced from external resources

- Implemented the header scroll effect and movie card scroll effect 
    - Code sourced from https://supabase.com/blog/infinite-scroll-with-nextjs-framer-motion and used chat gpt to alter according to need.

Sourced Code
```js
const handleScroll = () => {
  // Do stuff when scrolling
}

useEffect(() => {
  const handleDebouncedScroll = debounce(() => handleScroll(), 200)
  window.addEventListener('scroll', handleDebouncedScroll)
  return () => {
    window.removeEventListener('scroll', handleDebouncedScroll)
  }
}, [])
```

Implemented Code

```js
 const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
```

```js
  const handleClick = (direction: string) => {
        setIsMoved(true)

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;

            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    }
```

- Implemented movie detail component (Modal)
    - Code sourced from https://devrecipes.net/modal-component-with-next-js/

Implemented Code
```tsx
  <Modal
            open={showModal}
            onClose={handleCloseModal}
            className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
        >
            <>

                <button
                    onClick={handleCloseModal}
                    className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
                >
                    <RxCross1 className="h-6 w-6" />
                </button>

               { trailerData? <><div className="relative pt-[56.25%]">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailerData?.key}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: '0', left: '0' }}
                        playing
                        muted={muted}
                    />
                    <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                        <div className="flex space-x-2">
                            <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                                <FaPlay className="h-7 w-7 text-black" />
                                Play
                            </button>

                            <button className="modalButton" >

                                <AiOutlinePlus className="h-7 w-7" />

                            </button>

                            <button className="modalButton">
                                <BsHandThumbsUp className="h-7 w-7" />
                            </button>
                        </div>
                        <button className="modalButton" onClick={() => setMuted(!muted)}>
                            {muted ? (
                                <HiOutlineVolumeOff className="h-6 w-6" />
                            ) : (
                                <HiOutlineVolumeUp className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div></>:<h1 className="bg-[#181818] text-center pt-3">No data to Display</h1>}

                <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
                    <div className="space-y-6 text-lg">
                        <div className="flex items-center space-x-2 text-sm">
                            <p className="font-semibold text-green-400">
                            {Math.round(movieData?.vote_average * 10)}% Match
                            </p>
                            <p className="font-light">
                                {movieData?.release_date}
                            </p>
                            <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                                HD
                            </div>
                        </div>

                        <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                            <p className="w-5/6">{movieData?.overview}</p>
                            <div className="flex flex-col space-y-3 text-sm">
                                <div>
                                    <span className="text-[gray]">Genres: </span>
                                    {movieData?.genres.map((genre: any) => genre.name).join(', ')}
                                </div>

                                <div>
                                    <span className="text-[gray]">Original language: </span>
                                    {movieData?.original_language}
                                </div>

                                <div>
                                    <span className="text-[gray]">Total votes: </span>
                                    {movieData?.vote_count}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Modal>
```

## Overall perspective on the assignment
Embarking on this assignment, I was initially faced with the challenge of unfamiliarity with Next.js and TypeScript. This necessitated a period of self-study, during which I acquired the basics of these technologies. As I delved into the project, I found it to be a demanding yet rewarding endeavor. The complexity of the user interfaces I was tasked to build tested my newly acquired skills and pushed me to expand my understanding. Despite the challenges, the project served as a valuable learning experience, not only in terms of technical skills but also in navigating and overcoming obstacles in unfamiliar territories. Overall, this assignment has been a significant step in my journey of continuous learning and growth in the field of web development.

