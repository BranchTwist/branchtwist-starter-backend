(function (React) {
  'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  var React__default = /*#__PURE__*/_interopDefault(React);

  const Dashboard = () => {
    const imageStyle = {
      padding: '50px',
      margin: 'auto',
      objectFit: 'cover'
    };
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      overflow: 'hidden'
    };
    return /*#__PURE__*/React__default.default.createElement("div", {
      style: containerStyle
    }, /*#__PURE__*/React__default.default.createElement("img", {
      src: "/cover.png",
      alt: "BranchTwist Logo",
      style: imageStyle
    }));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.dashboard = Dashboard;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kYXNoYm9hcmQudHN4IiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IGltYWdlU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgcGFkZGluZzogJzUwcHgnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgfTtcblxuICBjb25zdCBjb250YWluZXJTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9jb3Zlci5wbmdcIlxuICAgICAgICBhbHQ9XCJCcmFuY2hUd2lzdCBMb2dvXCJcbiAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGV9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBkYXNoYm9hcmQgZnJvbSAnLi4vZGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5kYXNoYm9hcmQgPSBkYXNoYm9hcmQiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwiaW1hZ2VTdHlsZSIsInBhZGRpbmciLCJtYXJnaW4iLCJvYmplY3RGaXQiLCJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwic3JjIiwiYWx0IiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiZGFzaGJvYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0VBRU8sTUFBTUEsU0FBbUIsR0FBR0EsTUFBTTtFQUN2QyxFQUFBLE1BQU1DLFVBQStCLEdBQUc7RUFDdENDLElBQUFBLE9BQU8sRUFBRSxNQUFNO0VBQ2ZDLElBQUFBLE1BQU0sRUFBRSxNQUFNO0VBQ2RDLElBQUFBLFNBQVMsRUFBRSxPQUFBO0tBQ1osQ0FBQTtFQUVELEVBQUEsTUFBTUMsY0FBbUMsR0FBRztFQUMxQ0MsSUFBQUEsT0FBTyxFQUFFLE1BQU07RUFDZkMsSUFBQUEsVUFBVSxFQUFFLFFBQVE7RUFDcEJDLElBQUFBLGNBQWMsRUFBRSxRQUFRO0VBQ3hCQyxJQUFBQSxNQUFNLEVBQUUsT0FBTztFQUNmQyxJQUFBQSxRQUFRLEVBQUUsUUFBQTtLQUNYLENBQUE7SUFFRCxvQkFDRUMsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLEtBQUEsRUFBQTtFQUFLQyxJQUFBQSxLQUFLLEVBQUVSLGNBQUFBO0tBQ1ZNLGVBQUFBLHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxLQUFBLEVBQUE7RUFDRUUsSUFBQUEsR0FBRyxFQUFDLFlBQVk7RUFDaEJDLElBQUFBLEdBQUcsRUFBQyxrQkFBa0I7RUFDdEJGLElBQUFBLEtBQUssRUFBRVosVUFBQUE7RUFBVyxHQUNuQixDQUNFLENBQUMsQ0FBQTtFQUVWLENBQUM7O0VDMUJEZSxPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFLENBQUE7RUFFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7Ozs7OzsifQ==
