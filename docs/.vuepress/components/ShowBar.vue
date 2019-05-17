<template>
  <div style="position: relative;margin-bottom: 90px;">
    <AppBar95>
      <ToolBar95>
        <Bar95 />
        <Button95 flat>
          Edit
        </Button95>
        <Button95 flat disabled>
          Save
        </Button95>
        <Bar95 />
      </ToolBar95>
    </AppBar95>
  </div>
</template>

<script>
import AppBar95 from './AppBar95';
import Bar95 from './Bar95';
import ToolBar95 from './ToolBar95';
import Button95 from './Button95';
export default {
  name: 'ShowBar',
  components: {
    AppBar95,
    Bar95,
    ToolBar95,
    Button95,
  }
}
</script>
