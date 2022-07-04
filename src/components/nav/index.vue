<template>
  <el-tabs v-model="editableTabsValue" closable @tab-remove="removeTab">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
        {
          title: "Tab 3",
          name: "3",
          content: "Tab 2 content",
        },
        {
          title: "Tab 4",
          name: "4",
          content: "Tab 2 content",
        },
        {
          title: "Tab 5",
          name: "5",
          content: "Tab 2 content",
        },
        {
          title: "Tab 6",
          name: "6",
          content: "Tab 2 content",
        },
        {
          title: "Tab 7",
          name: "7",
          content: "Tab 2 content",
        },
        {
          title: "Tab 8",
          name: "8",
          content: "Tab 2 content",
        },
        {
          title: "Tab 9",
          name: "9",
          content: "Tab 2 content",
        },
        {
          title: "Tab 10",
          name: "10",
          content: "Tab 2 content",
        },
        {
          title: "Tab 11",
          name: "11",
          content: "Tab 2 content",
        },
        {
          title: "Tab 12",
          name: "12",
          content: "Tab 2 content",
        },
        {
          title: "Tab 13",
          name: "13",
          content: "Tab 2 content",
        },
        {
          title: "Tab 14",
          name: "14",
          content: "Tab 2 content",
        },
        {
          title: "Tab 15",
          name: "15",
          content: "Tab 2 content",
        },
        {
          title: "Tab 16",
          name: "16",
          content: "Tab 2 content",
        },
        {
          title: "Tab 17",
          name: "17",
          content: "Tab 2 content",
        },
        {
          title: "Tab 18",
          name: "18",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-tabs {
  height: 40px;
  margin: 10px 10px 0;
}
</style>