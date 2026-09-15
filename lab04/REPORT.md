# Lab 04 report

Student name: Ilina Krumova

Date: 15.09

Repository: TODO

Status: TODO - complete the exercises and record your own observations.

## Exercise 1 - Explore and make a commit

- Working folder: ai1220/lab04
- Git repository root: ai1220
- Initial report commit hash (`Start lab04 report`): 3f06651
- Files included in that commit: lab04/REPORT.md
- What was saved in that commit: My student name and date were added to the Lab 04 report.
- Which file owns the playlist, and why: backend.py owns the playlist because the Python server stores the song data in memory and handles the /songs API.
- Which file displays the playlist, and why: index.html displays the playlist because it provides the browser interface and loads the stored songs from the server.
- How the initial song gets from the server to the page: When the page loads, index.html sends a GET request to /songs. The backend returns the stored playlist as JSON, and the frontend displays First Light / Demo Band in the song list.
- Codex access issues and instructor-supported alternatives, if any: I completed the equivalent steps manually using VS Code and the terminal.

## Exercise 2 - Backend

- Explain your completed `create_song(payload)` function: The function reads the title and artist, validates them, removes surrounding whitespace, creates a song with the next available ID, stores it in the playlist, increments the ID, and returns the new song.
- Explain how both fields are validated and stored: Both title and artist must be strings, must not be empty after trimming, and must contain at most 80 characters. The trimmed values are stored.
- Explain how rejected input leaves the playlist and next ID unchanged: Validation is completed before the song is appended or next_id is incremented, so invalid input raises ValueError without changing either value.
- Accepted direct request checked before Exercise 3, and observation: POST with Blue Sky / Test Duo returned HTTP 201 Created and {"id": 2, "title": "Blue Sky", "artist": "Test Duo"}.
- Rejected direct request checked before Exercise 3, and observation: POST with a whitespace-only title returned HTTP 400 Bad Request and {"error": "Title must not be empty."}.

## Exercise 3 - Frontend

- Visible heading after your edit: My playlist
- Explain your completed `sendSong(title, artist)` function: The function sends the supplied title and artist to the /songs endpoint using requestJSON and returns the parsed server response.
- Explain how the request method, path, headers, and body match the contract: It uses POST /songs, sets Content-Type to application/json, and sends the title and artist as a JSON object.
- Observed behavior after an accepted form submission: The invented song Светлини в нощта / Васил Найденов appeared in the stored songs list, the input fields cleared, and the page displayed "Song added."
- Observed behavior after a rejected form submission: A whitespace-only title was rejected with "Title must not be empty." The inputs remained and the stored songs list did not change.
- How you checked that the display matches what the server stores: I compared the songs displayed on the page with the songs returned by the /songs endpoint.

## Exercise 4 - Actual verification observations

Fill in the actual result and pass/fail only after running each check.

| Check from page 3 | Actual observation | Pass/fail |
| --- | --- | --- |
| Fresh start: page and GET show only First Light / Demo Band, ID 1 | After restarting the server, the page showed only First Light / Demo Band and GET /songs returned ID 1. | Pass |
| Form: Blue Sky / Test Duo appears once; fields clear | Blue Sky / Test Duo appeared once and both input fields cleared after submission. | Pass |
| Refresh: both songs remain | After refreshing, First Light / Demo Band and Blue Sky / Test Duo both remained. | Pass |
| Form: another invented song with different values works | An invented song was added successfully through the form and appeared in the list. | Pass |
| Direct addition: 201, trimmed values, next unused ID; visible after refresh | Quiet Road / Sample Artist returned 201 with trimmed title and ID 3. | Pass |
| Whitespace-only title: 400; no new song | The request returned 400 with "Title must not be empty." | Pass |
| Missing artist: 400 | The request returned 400 with "Artist must be a string." | Pass |
| Numeric title: 400 | The request returned 400 with "Title must be a string." | Pass |
| 81-character title: 400 | The 81-character title returned 400 with "Title must be at most 80 characters." | Pass |
| 80-character title: accepted | The 80-character title returned 201 Created and was stored with ID 5. | Pass |
| Rejected additions do not consume an ID | After a rejected request, Golden Hour / Test Singer received ID 4, confirming that no ID was consumed. | Pass |
| Form rejection: visible error, retained inputs, unchanged list | A whitespace-only title displayed "Title must not be empty."; the artist remained and the list did not change. | Pass |
| Corrected form submission succeeds | A corrected valid submission was accepted and appeared in the list. | Pass |
| Keyboard: Tab and Enter work | I used Tab to navigate the form and Enter to submit Лятна нощ / Васил Найденов successfully. | Pass |
| Network: POST payload, 201 status, JSON response, following GET | Safari Network showed POST /songs with JSON payload for Звезден път / Васил Найденов, status 201, JSON response with ID 7, followed by GET /songs with 200 OK. | Pass |
| Restart and refresh: only the seed song remains | After restarting the Python server and refreshing, only First Light / Demo Band remained. | Pass |

### One successful request and response

Request method and path: POST /songs

Request headers: Content-Type: application/json

Actual request body:

```text
{"title":"  Quiet Road  ","artist":"Sample Artist"}

### One failed request and response

Request method and path: TODO

Request headers: TODO

Actual request body:

```text
TODO - paste the body you sent.
```

Actual response status and headers: TODO

Actual response body:

```text
TODO - paste the response you received.
```

Evidence that the playlist and next ID were unchanged: TODO

### One failed request and response

Request method and path: POST /songs

Request headers: Content-Type: application/json

Actual request body:

```text
{"title":"   ","artist":"Sample Artist"}
```

Actual response status and headers: HTTP/1.0 400 Bad Request; Content-Type: application/json

Actual response body:

```text
{"error": "Title must not be empty."}
```

Evidence that the playlist and next ID were unchanged: The rejected request did not add a song. The next valid request, Golden Hour / Test Singer, received ID 4 immediately after Quiet Road had received ID 3, confirming that the rejected request did not consume an ID.

### One code change I reviewed
File and change: backend.py - I completed the create_song(payload) function.

My explanation of the change: The function validates that title and artist are strings, trims surrounding whitespace, checks that each value contains 1 to 80 characters, then stores the valid song with the next available ID.

Observed result and why it agrees with the contract: Valid requests returned 201 and stored trimmed values, while invalid requests returned 400 without adding a song or consuming an ID. This matches the required API contract.

## Submission

- Final commit hash (`Complete lab04 playlist`): TODO
- Files included and review notes: TODO
- Push and GitHub verification: TODO
- Optional stretch, if attempted: TODO
