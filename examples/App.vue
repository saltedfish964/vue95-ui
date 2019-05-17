<template>
  <div id="app">

    <Row95 style="margin-bottom: 20px;">
      <Col95 span="24" style="background: #99a9bf;height: 36px;border-radius: 4px;"></Col95>
    </Row95>

    <Row95 style="margin-bottom: 20px;">
      <Col95 span="12" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="12" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
    </Row95>

    <Row95 style="margin-bottom: 20px;">
      <Col95 span="8" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="8" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="8" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
    </Row95>

    <Row95 style="margin-bottom: 20px;">
      <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="6" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="6" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
    </Row95>

    <Row95 style="margin-bottom: 20px;">
      <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="4" style="background: #d3dce6;height: 36px;border-radius: 4px;"></Col95>
      <Col95 span="4" style="background: #e5e9f2;height: 36px;border-radius: 4px;"></Col95>
    </Row95>

    <List95>
      <ListItem95 link="https://du-dudu.gitee.io/selfnavigation/">Photos</ListItem95>
      <ListItem95>Videos</ListItem95>
      <ListItem95>Other</ListItem95>
    </List95>

    <List95>
      <ListItem95 square>😍</ListItem95>
      <ListItem95 square>😝</ListItem95>
      <ListItem95 square link="https://du-dudu.gitee.io/selfnavigation/">🍕</ListItem95>
    </List95>

    <List95 inline>
      <ListItem95 square disabled>🌿</ListItem95>
      <Bar95 />
      <ListItem95>Tackle</ListItem95>
      <ListItem95>Growl</ListItem95>
      <ListItem95 disabled>Razor Leaf</ListItem95>
    </List95>

    <div>
      <List95 fullWidth>
      <ListItem95 disabled>Photos</ListItem95>
      <ListItem95>Videos</ListItem95>
      <ListItem95>Other</ListItem95>
    </List95>
    </div>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style>
</style>
