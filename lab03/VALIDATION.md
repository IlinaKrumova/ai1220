# CampusPulse requirements review

Name or team: Ilina Krumova 

Reviewer: 

Date:

Review the completed `stakeholders.md` and `REQUIREMENTS.md`. Refer to specific
IDs and evidence in every answer. A yes or no by itself is not enough.

## Validity

Do the requirements represent what the stakeholders need? Which IDs did you
check, and what evidence supports them?

Response: The requirements represent the main stakeholder needs. UR-2 and FR-2 reflect S1's requirement that RSVP identities are not public unless the student chooses. UR-3, FR-3, and FR-4 reflect S2's need for approved officers and different event audiences. UR-5 and FR-6 reflect S3's need to review reports, hide events, preserve evidence for appeals, and record moderation decisions. UR-6 and NFR-4 reflect S5's requirement to delete attendance data for cancelled events within 30 days.

## Consistency

Do any requirements contradict one another or the release scope?

Response: No direct contradictions were found. The release scope includes verified groups, announcements, events, following, RSVP, audience visibility, moderation, and appeals, which are consistent with UR-1 to UR-6 and FR-1 to FR-6. The out-of-scope items also match the Won't this release list. UR-2, FR-2, and NFR-2 consistently require RSVP identities to be private by default unless the student chooses otherwise.

## Completeness

Is an important actor, normal flow, failure, permission, privacy rule, or
boundary missing?

Response: The specification covers the main actors and flows for students, group officers, moderators, and privacy requirements. It also includes permission and privacy cases through FR-2 and FR-3. However, the source notes include an abuse case in S6 where a compromised group account may repeatedly post the same announcement, and there is currently no requirement that addresses repeated-post abuse. This is a completeness gap that should be considered for a future requirement.

## Realism

Can the proposed release and its quality targets reasonably be delivered? Mark
unsupported targets as assumptions or open questions.

Response: The pilot target in NFR-1 is realistic in scope because it uses the stakeholder-provided target of 5,000 students and 200 groups. However, the brief provides no peak traffic figure for Orientation Week, so Q1 records this as an open question rather than inventing a performance target. NFR-3 also depends on confirming which accessibility standard and screen readers will be used for acceptance testing, as recorded in Q2.

## Verifiability

Could a tester decide whether each requirement passes or fails? Identify any
wording that is still vague.

Response: Most requirements can be tested with a clear pass or fail result. FR-2 can be tested by creating a new RSVP and checking that the student's identity is private unless the student explicitly makes it public. FR-3 can be tested by attempting to publish with an unapproved account, and NFR-4 can be tested by checking whether attendance data is deleted within 30 days after cancellation. NFR-3 can be tested across the listed core flows, although Q2 still needs to confirm the accessibility standard and screen readers for formal acceptance testing.

## One requirement you revised

- Requirement ID: FR-2
- Before: The system shall keep a student's RSVP identity private by default and allow the student to choose whether it is publicly visible.
- What was wrong or missing: The wording did not explicitly state when the default privacy rule is applied.
- After: The system shall make a student's identity private when a new RSVP is created and shall allow the student to explicitly choose to make it publicly visible.
- Evidence or stakeholder to confirm the change: S1 states that an RSVP name must not appear on a public list unless the student chooses that.

## Final check

- [x] Stakeholder conflicts have a decision or a follow-up question.
- [x] Scope exclusions agree with the Won't list.
- [x] Every FR and NFR traces to a user requirement.
- [x] Every NFR contains a measurable target and condition.
- [x] Traceability rows use IDs that exist in the document.
- [x] The revised requirement has also been updated in the traceability table.

