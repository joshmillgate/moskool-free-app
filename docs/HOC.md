# HOC

* `withRouter(wrappedComponent)` Provider router props
* `withStyles(stylesObject)(wrappedComponent)`  Provider classes prop to wrappedComponent from styles object. This is specific to Material UI and similar to styled-components
* `withFirebase(wrappedComponent)` Provides firebase props
* `withAuthentication(wrappedContainer)` Only authenticated can access
* `withAuthorization(wrappedContainer)` Only authorized can access based on a condition ex: admin role
* `withAuthorization(wrappedContainer)` Only authorized can access based on a condition ex: admin role
* `withEmailVerification(wrappedContainer)` Provides email verification stuff