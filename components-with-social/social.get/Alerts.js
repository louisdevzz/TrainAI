const profile = Social.get("louisdevzz.near/profile/*");

return (
  <div class="alert alert-primary" role="alert">
    {profile.description}
  </div>
);
