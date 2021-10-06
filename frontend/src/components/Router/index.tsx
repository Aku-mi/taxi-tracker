import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navbar } from "../Navbar";

interface Page {
  component: React.FC;
  path: string;
  label: string;
  enabled?: boolean;
}

interface Props {
  pages: Page[];
  profile?: boolean;
}

const getComponent = (c: React.FC) => {
  const C = c as React.FC;

  return <C />;
};

export const Router: React.FC<Props> = (props) => {
  const items = props.pages
    .filter((p) => p.path !== "*")
    .map((p) => ({
      href: p.path,
      txt: p.label,
      enabled: p.enabled,
    }));

  return (
    <BrowserRouter>
      <div>
        <Navbar items={items} profile={props.profile} />
        <Switch>
          {props.pages.map((p, i) => (
            <Route key={i} exact={p.path !== "*"} path={p.path}>
              {p.enabled ? getComponent(p.component) : <Redirect to="/" />}
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};
