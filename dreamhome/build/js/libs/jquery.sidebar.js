!function(e){e.fn.sidebar=function(i){function s(){n.trigger("sidebar:close",[{speed:0}])}var n=this;if(n.length>1)return n.each(function(){e(this).sidebar(i)});var o=(n.outerWidth(),n.outerHeight(),e.extend({speed:200,side:"left",isClosed:!1,close:!0},i));return n.on("sidebar:open",function(i,s){var t={};t[o.side]=0,o.isClosed=null,n.stop().animate(t,e.extend({},o,s).speed,function(){o.isClosed=!1,n.trigger("sidebar:opened")})}),n.on("sidebar:close",function(i,s){var t={};"left"===o.side||"right"===o.side?t[o.side]=-n.outerWidth():t[o.side]=-n.outerHeight(),o.isClosed=null,n.stop().animate(t,e.extend({},o,s).speed,function(){o.isClosed=!0,n.trigger("sidebar:closed")})}),n.on("sidebar:toggle",function(e,i){o.isClosed?n.trigger("sidebar:open",[i]):n.trigger("sidebar:close",[i])}),!o.isClosed&&o.close&&s(),e(window).on("resize",function(){o.isClosed&&s()}),n.data("sidebar",o),n},e.fn.sidebar.version="3.3.2"}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIiQiLCJmbiIsInNpZGViYXIiLCJvcHRpb25zIiwiY2xvc2VXaXRoTm9BbmltYXRpb24iLCJzZWxmIiwidHJpZ2dlciIsInNwZWVkIiwidGhpcyIsImxlbmd0aCIsImVhY2giLCJzZXR0aW5ncyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsImV4dGVuZCIsInNpZGUiLCJpc0Nsb3NlZCIsImNsb3NlIiwib24iLCJldiIsImRhdGEiLCJwcm9wZXJ0aWVzIiwic3RvcCIsImFuaW1hdGUiLCJ3aW5kb3ciLCJ2ZXJzaW9uIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQ0FRQSxTQUFVQSxHQTBDTkEsRUFBRUMsR0FBR0MsUUFBVSxTQUFTQyxHQTJFcEIsUUFBU0MsS0FDTEMsRUFBS0MsUUFBUSxrQkFDVEMsTUFBTyxLQTNFZixHQUFJRixHQUFPRyxJQUNYLElBQUlILEVBQUtJLE9BQVMsRUFDZCxNQUFPSixHQUFLSyxLQUFLLFdBQ2JWLEVBQUVRLE1BQU1OLFFBQVFDLElBS3hCLElBSUlRLElBSlFOLEVBQUtPLGFBQ0pQLEVBQUtRLGNBR0hiLEVBQUVjLFFBR2JQLE1BQU8sSUFHUFEsS0FBTSxPQUdOQyxVQUFVLEVBR1ZDLE9BQU8sR0FFUmQsR0FpRUgsT0EzREFFLEdBQUthLEdBQUcsZUFBZ0IsU0FBU0MsRUFBSUMsR0FDakMsR0FBSUMsS0FDSkEsR0FBV1YsRUFBU0ksTUFBUSxFQUM1QkosRUFBU0ssU0FBVyxLQUNwQlgsRUFBS2lCLE9BQU9DLFFBQVFGLEVBQVlyQixFQUFFYyxVQUFXSCxFQUFVUyxHQUFNYixNQUFPLFdBQ2hFSSxFQUFTSyxVQUFXLEVBQ3BCWCxFQUFLQyxRQUFRLHNCQVNyQkQsRUFBS2EsR0FBRyxnQkFBaUIsU0FBU0MsRUFBSUMsR0FDbEMsR0FBSUMsS0FDa0IsVUFBbEJWLEVBQVNJLE1BQXFDLFVBQWxCSixFQUFTSSxLQUNyQ00sRUFBV1YsRUFBU0ksT0FBU1YsRUFBS08sYUFFbENTLEVBQVdWLEVBQVNJLE9BQVNWLEVBQUtRLGNBRXRDRixFQUFTSyxTQUFXLEtBQ3BCWCxFQUFLaUIsT0FBT0MsUUFBUUYsRUFBWXJCLEVBQUVjLFVBQVdILEVBQVVTLEdBQU1iLE1BQU8sV0FDaEVJLEVBQVNLLFVBQVcsRUFDcEJYLEVBQUtDLFFBQVEsc0JBUXJCRCxFQUFLYSxHQUFHLGlCQUFrQixTQUFTQyxFQUFJQyxHQUMvQlQsRUFBU0ssU0FDVFgsRUFBS0MsUUFBUSxnQkFBaUJjLElBRTlCZixFQUFLQyxRQUFRLGlCQUFrQmMsT0FXbENULEVBQVNLLFVBQVlMLEVBQVNNLE9BQy9CYixJQUdKSixFQUFFd0IsUUFBUU4sR0FBRyxTQUFVLFdBQ2RQLEVBQVNLLFVBQ2RaLE1BR0pDLEVBQUtlLEtBQUssVUFBV1QsR0FFZE4sR0FJWEwsRUFBRUMsR0FBR0MsUUFBUXVCLFFBQVUsU0FDeEJDIiwiZmlsZSI6ImpxdWVyeS5zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqICBqUXVlcnkgc2lkZWJhciBwbHVnaW5cclxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQSBzdHVwaWQgc2ltcGxlIHNpZGViYXIgalF1ZXJ5IHBsdWdpbi5cclxuICpcclxuICogIERldmVsb3BlZCB3aXRoIDwzIGFuZCBKYXZhU2NyaXB0IGJ5IHRoZSBqaWxsaXggZGV2ZWxvcGVycy5cclxuICogIENvcHlyaWdodCAoYykgMjAxMy0xNSBqaWxsaXhcclxuICogKi9cclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHNpZGViYXJcclxuICAgICAqIEluaXRpYWxpemUgc2lkZWJhciBvbiBzZWxlY3RlZCBlbGVtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBgYGBqc1xyXG4gICAgICogJChcIi5teS1zaWRlYmFyXCIpLnNpZGViYXIoey4uLn0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogQWZ0ZXIgdGhlIGNhbGwgYWJvdmUsIHlvdSBjYW4gcHJvZ3JhbWF0aWNhbGx5IG9wZW4vY2xvc2UvdG9nZ2xlIHRoZSBzaWRlYmFyIHVzaW5nOlxyXG4gICAgICpcclxuICAgICAqIGBgYGpzXHJcbiAgICAgKiAkKFwiLm15LXNpZGViYXJcIikudHJpZ2dlcihcInNpZGViYXI6b3BlblwiKTtcclxuICAgICAqICQoXCIubXktc2lkZWJhclwiKS50cmlnZ2VyKFwic2lkZWJhcjpjbG9zZVwiKTtcclxuICAgICAqICQoXCIubXktc2lkZWJhclwiKS50cmlnZ2VyKFwic2lkZWJhcjp0b2dnbGVcIik7XHJcbiAgICAgKiAkKFwiLm15LXNpZGViYXJcIikudHJpZ2dlcihcInNpZGViYXI6Y2xvc2VcIiwgW3sgc3BlZWQ6IDAgfV0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogQWZ0ZXIgdGhlIHNpZGViYXIgaXMgb3BlbmVkL2Nsb3NlZCwgYHNpZGViYXI6b3BlbmVkYC9gc2lkZWJhcjpjbG9zZWRgIGV2ZW50IGlzIGVtaXR0ZWQuXHJcbiAgICAgKlxyXG4gICAgICogYGBganNcclxuICAgICAqICQoXCIubXktc2lkZWJhclwiKS5vbihcInNpZGViYXI6b3BlbmVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAqICAgIC8vIERvIHNvbWV0aGluZyBvbiBvcGVuXHJcbiAgICAgKiB9KTtcclxuICAgICAqXHJcbiAgICAgKiAkKFwiLm15LXNpZGViYXJcIikub24oXCJzaWRlYmFyOmNsb3NlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgKiAgICAvLyBEbyBzb21ldGhpbmcgb24gY2xvc2VcclxuICAgICAqIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKlxyXG4gICAgICogQG5hbWUgc2lkZWJhclxyXG4gICAgICogQGZ1bmN0aW9uXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBbiBvYmplY3QgdGhhdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZSBkZWZhdWx0IG9wdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogIC0gYHNwZWVkYCAoTnVtYmVyKTogYW5pbWF0aW9uIHNwZWVkIChkZWZhdWx0OiBgMjAwYClcclxuICAgICAqICAtIGBzaWRlYCAoU3RyaW5nKTogbGVmdHxyaWdodHx0b3B8Ym90dG9tIChkZWZhdWx0OiBgXCJsZWZ0XCJgKVxyXG4gICAgICogIC0gYGlzQ2xvc2VkYCAoQm9vbGVhbik6IEEgYm9vbGVhbiB2YWx1ZSBpbmRpY2F0aW5nIGlmIHRoZSBzaWRlYmFyIGlzIGNsb3NlZCBvciBub3QgKGRlZmF1bHQ6IGBmYWxzZWApLlxyXG4gICAgICogIC0gYGNsb3NlYCAoQm9vbGVhbik6IElmIGB0cnVlYCwgdGhlIHNpZGViYXIgd2lsbCBiZSBjbG9zZWQgYnkgZGVmYXVsdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIHtqUXVlcnl9IFRoZSBqUXVlcnkgZWxlbWVudHMgdGhhdCB3ZXJlIHNlbGVjdGVkLlxyXG4gICAgICovXHJcbiAgICAkLmZuLnNpZGViYXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoc2VsZi5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWRlYmFyKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdpZHRoLCBoZWlnaHRcclxuICAgICAgICB2YXIgd2lkdGggPSBzZWxmLm91dGVyV2lkdGgoKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gc2VsZi5vdXRlckhlaWdodCgpO1xyXG5cclxuICAgICAgICAvLyBEZWZhdWx0c1xyXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBzcGVlZFxyXG4gICAgICAgICAgICBzcGVlZDogMjAwLFxyXG5cclxuICAgICAgICAgICAgLy8gU2lkZTogbGVmdHxyaWdodHx0b3B8Ym90dG9tXHJcbiAgICAgICAgICAgIHNpZGU6IFwibGVmdFwiLFxyXG5cclxuICAgICAgICAgICAgLy8gSXMgY2xvc2VkXHJcbiAgICAgICAgICAgIGlzQ2xvc2VkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vIFNob3VsZCBJIGNsb3NlIHRoZSBzaWRlYmFyP1xyXG4gICAgICAgICAgICBjbG9zZTogdHJ1ZVxyXG5cclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLyohXHJcbiAgICAgICAgICogIE9wZW5zIHRoZSBzaWRlYmFyXHJcbiAgICAgICAgICogICQoW2pRdWVyeSBzZWxlY3Rvcl0pLnRyaWdnZXIoXCJzaWRlYmFyOm9wZW5cIik7XHJcbiAgICAgICAgICogKi9cclxuICAgICAgICBzZWxmLm9uKFwic2lkZWJhcjpvcGVuXCIsIGZ1bmN0aW9uKGV2LCBkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0aWVzID0ge307XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNbc2V0dGluZ3Muc2lkZV0gPSAwO1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5pc0Nsb3NlZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYuc3RvcCgpLmFuaW1hdGUocHJvcGVydGllcywgJC5leHRlbmQoe30sIHNldHRpbmdzLCBkYXRhKS5zcGVlZCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5pc0Nsb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2VsZi50cmlnZ2VyKFwic2lkZWJhcjpvcGVuZWRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLyohXHJcbiAgICAgICAgICogIENsb3NlcyB0aGUgc2lkZWJhclxyXG4gICAgICAgICAqICAkKFwiW2pRdWVyeSBzZWxlY3Rvcl0pLnRyaWdnZXIoXCJzaWRlYmFyOmNsb3NlXCIpO1xyXG4gICAgICAgICAqICovXHJcbiAgICAgICAgc2VsZi5vbihcInNpZGViYXI6Y2xvc2VcIiwgZnVuY3Rpb24oZXYsIGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7fTtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLnNpZGUgPT09IFwibGVmdFwiIHx8IHNldHRpbmdzLnNpZGUgPT09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc1tzZXR0aW5ncy5zaWRlXSA9IC1zZWxmLm91dGVyV2lkdGgoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbc2V0dGluZ3Muc2lkZV0gPSAtc2VsZi5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldHRpbmdzLmlzQ2xvc2VkID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5zdG9wKCkuYW5pbWF0ZShwcm9wZXJ0aWVzLCAkLmV4dGVuZCh7fSwgc2V0dGluZ3MsIGRhdGEpLnNwZWVkLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmlzQ2xvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcihcInNpZGViYXI6Y2xvc2VkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyohXHJcbiAgICAgICAgICogIFRvZ2dsZXMgdGhlIHNpZGViYXJcclxuICAgICAgICAgKiAgJChcIltqUXVlcnkgc2VsZWN0b3JdKS50cmlnZ2VyKFwic2lkZWJhcjp0b2dnbGVcIik7XHJcbiAgICAgICAgICogKi9cclxuICAgICAgICBzZWxmLm9uKFwic2lkZWJhcjp0b2dnbGVcIiwgZnVuY3Rpb24oZXYsIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXIoXCJzaWRlYmFyOm9wZW5cIiwgW2RhdGFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlcihcInNpZGViYXI6Y2xvc2VcIiwgW2RhdGFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZVdpdGhOb0FuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgc2VsZi50cmlnZ2VyKFwic2lkZWJhcjpjbG9zZVwiLCBbe1xyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDBcclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xvc2UgdGhlIHNpZGViYXJcclxuICAgICAgICBpZiAoIXNldHRpbmdzLmlzQ2xvc2VkICYmIHNldHRpbmdzLmNsb3NlKSB7XHJcbiAgICAgICAgICAgIGNsb3NlV2l0aE5vQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXNldHRpbmdzLmlzQ2xvc2VkKSB7IHJldHVybjsgfVxyXG4gICAgICAgICAgICBjbG9zZVdpdGhOb0FuaW1hdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLmRhdGEoXCJzaWRlYmFyXCIsIHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFZlcnNpb25cclxuICAgICQuZm4uc2lkZWJhci52ZXJzaW9uID0gXCIzLjMuMlwiO1xyXG59KShqUXVlcnkpOyJdfQ==