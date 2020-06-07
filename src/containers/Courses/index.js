/**
 * A Container contains a list of courses created by MoSkool and a list of courses created by the community
 * @prop {Object} authUser - Passed from parent container and has everything about the logged in user
 * @prop {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<CourseCollection/>} - returns component which then the children fetch the correct data
 */

import React, { lazy, Suspense } from "react";

import { withAuthentication } from "components/shared/Session";
import MoSpinner from "components/library/MoSpinner";

const CourseCollection = lazy(() => import("./CourseCollection"));

const collection = {
  path: "courses",
  title: "Your Courses",
  isProgressBar: false,
};

const Courses = ({ authUser, firebase, match }) => (
  <Suspense fallback={<MoSpinner isLoading={true} color="primary" />}>
    <CourseCollection
      authUser={authUser}
      collection={collection}
      firebase={firebase}
      match={match}
    />
  </Suspense>
);

export default withAuthentication(Courses);
