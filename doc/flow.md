# Flow

## Creating a New Member
**note: line numbers will change**
### It starts with actions
1. 'request' action called from UI
    - e.g., requestCreateMember(), actions.js line 111
2. 'insert' action called from 'request' action's 'success:' property
    - e.g., insertMember(), actions.js line 25
### Redux will call reducers
4. Reducers change state. You write the reducers to decide how state will be changed.
    - e.g., membersById(), reducers.js line 66 & membersIds() line 78
5. **state is now changed**
### Redux will call all store listeners
7. This got hooked-up somewhere, we need to discover where. However, Redux will notify all concerned components that state has changed and the components can re-render with the new data.


## Updating a Member
- open ManageMembers component
- user clicks Add Member
- create a new empty member with default values via requestCreatemember()
- as user enters data info fields it goes into local Redux store to the Member just added
- user clicks Save the data is written to the database via requestUpdateMember( _id, picture, firstName, lastName, role, index )
