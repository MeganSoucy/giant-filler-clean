# Future Ideas

Everything in this document is optional future work. None of these ideas should be treated as completed functionality or part of the current Milestone 2 implementation.

## Timed-Turn Mode

Add an optional turn timer of approximately 10–15 seconds. If the active player does not make a legal selection before time expires, the turn passes automatically. The exact duration, warnings, pause behavior, and accessibility treatment should be tested before implementation.

## Beginner Valid-Move Mode

Add an optional beginner mode where only colours currently touching the active player's territory are selectable. The interface should explain why unavailable colours are disabled and should not replace the standard rules unless the mode is explicitly enabled.

## Accessibility Improvements

- Announce friendly colour names such as red, orange, yellow, green, blue, and purple instead of hexadecimal values.
- Provide clear active-player, illegal-move, capture, score, and game-over announcements.
- Review keyboard navigation, focus order, focus visibility, contrast, reduced-motion preferences, and screen-reader output.

## Online Multiplayer

Online multiplayer is deferred until the local two-player game is stable. Before implementation, discuss and document architecture, hosting, server authority, real-time synchronization, reconnect behavior, database and persistence needs, account requirements, authentication, security, privacy, moderation, cost, deployment, and maintenance.
